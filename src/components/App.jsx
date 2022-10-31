import { Form } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';
import { Filter } from './ContactFilter/ContactFilter';
import s from '../components/App.module.css';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <div className={s.Contacts}>
          <Filter />
          <PhoneList />
        </div>
      </Section>
    </>
  );
};
