import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filterContactsByName = (contactsList, filter) => {
    if (contactsList.length === 0) return [];
    return contactsList.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  const contactsList = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContact = filterContactsByName(contactsList, filter);

  return (
    <div>
      <ul>
        {visibleContact.length !== 0 ? (
          visibleContact.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
