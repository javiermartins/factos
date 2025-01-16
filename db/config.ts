import { column, defineDb } from 'astro:db';

const Curiosities = {
  columns: {
    date: column.date(),
    title: column.text(),
    information: column.text()
  }
}

export default defineDb({
  tables: {
    Curiosities
  }
});
