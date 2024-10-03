import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await window.firestore.collection('contacts').get();
        const contactsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setContacts(contactsList);
      } catch (error) {
        console.error('Error fetching documents: ', error);
        setError('Error fetching contacts. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    window.emailjs.init('FrVKZE6j-jCb1-IP7'); // Your EmailJS Public Key
  }, []);

  const sendEmails = async () => {
    setSending(true);
    try {
      for (const contact of contacts) {
        const templateParams = {
          user_name: contact.Name,
          user_email: contact.Email,
          user_message: contact.Message,
          to_email: contact.Email,
        };

        await window.emailjs.send(
          'service_8xj723s', // Your EmailJS Service ID
          'template_hakz5yj', // Your EmailJS Template ID
          templateParams
        );
      }
      alert('Emails sent successfully!');
    } catch (error) {
      console.error('Failed to send emails:', error);
      alert('Error sending emails. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'Name' },
      { Header: 'Email', accessor: 'Email' },
      { Header: 'Message', accessor: 'Message' }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: contacts });

  if (loading) return <p className="text-center">Loading contacts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact List</h2>
      <div className="flex justify-end mb-6">
        <button
          onClick={sendEmails}
          disabled={sending}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {sending ? 'Sending...' : 'Send Mail'}
        </button>
      </div>
      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No contacts available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 divide-y divide-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-50">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-300">
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr key={row.original.id} {...row.getRowProps()} className="hover:bg-gray-100 transition-colors duration-200">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactList;
