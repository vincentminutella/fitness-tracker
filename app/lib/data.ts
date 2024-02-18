import { sql } from '@vercel/postgres';
import {
  User
} from './definitions';


export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}




// import { formatCurrency } from './utils';

// export async function fetchRevenue() {
//   // Add noStore() here to prevent the response from being cached.
//   // This is equivalent to in fetch(..., {cache: 'no-store'}).

//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     // console.log('Fetching revenue data...');
//     // await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Revenue>`SELECT * FROM revenue`;

//     // console.log('Data fetch completed after 3 seconds.');

//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestMetrics() {
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT metrics.amount, account.name, account.image_url, account.email, metrics.id
//       FROM metrics
//       JOIN account ON metrics.customer_id = account.id
//       ORDER BY metrics.date DESC
//       LIMIT 5`;

//     const latestMetrics = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestMetrics;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest metrics.');
//   }
// }

// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM metrics`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM account`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM metrics`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfMetrics = Number(data[0].rows[0].count ?? '0');
//     const numberOfAccount = Number(data[1].rows[0].count ?? '0');
//     const totalPaidMetrics = formatCurrency(data[2].rows[0].paid ?? '0');
//     const totalPendingMetrics = formatCurrency(data[2].rows[0].pending ?? '0');

//     return {
//       numberOfAccount,
//       numberOfMetrics,
//       totalPaidMetrics,
//       totalPendingMetrics,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredMetrics(
//   query: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const metrics = await sql<MetricsTable>`
//       SELECT
//         metrics.id,
//         metrics.amount,
//         metrics.date,
//         metrics.status,
//         account.name,
//         account.email,
//         account.image_url
//       FROM metrics
//       JOIN account ON metrics.customer_id = account.id
//       WHERE
//         account.name ILIKE ${`%${query}%`} OR
//         account.email ILIKE ${`%${query}%`} OR
//         metrics.amount::text ILIKE ${`%${query}%`} OR
//         metrics.date::text ILIKE ${`%${query}%`} OR
//         metrics.status ILIKE ${`%${query}%`}
//       ORDER BY metrics.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return metrics.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch metrics.');
//   }
// }

// export async function fetchMetricsPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM metrics
//     JOIN account ON metrics.customer_id = account.id
//     WHERE
//       account.name ILIKE ${`%${query}%`} OR
//       account.email ILIKE ${`%${query}%`} OR
//       metrics.amount::text ILIKE ${`%${query}%`} OR
//       metrics.date::text ILIKE ${`%${query}%`} OR
//       metrics.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of metrics.');
//   }
// }

// export async function fetchInvoiceById(id: string) {
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         metrics.id,
//         metrics.customer_id,
//         metrics.amount,
//         metrics.status
//       FROM metrics
//       WHERE metrics.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchAccount() {
//   try {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM account
//       ORDER BY name ASC
//     `;

//     const account = data.rows;
//     return account;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all account.');
//   }
// }

// export async function fetchFilteredAccount(query: string) {
//   try {
//     const data = await sql<AccountTableType>`
// 		SELECT
// 		  account.id,
// 		  account.name,
// 		  account.email,
// 		  account.image_url,
// 		  COUNT(metrics.id) AS total_metrics,
// 		  SUM(CASE WHEN metrics.status = 'pending' THEN metrics.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN metrics.status = 'paid' THEN metrics.amount ELSE 0 END) AS total_paid
// 		FROM account
// 		LEFT JOIN metrics ON account.id = metrics.customer_id
// 		WHERE
// 		  account.name ILIKE ${`%${query}%`} OR
//         account.email ILIKE ${`%${query}%`}
// 		GROUP BY account.id, account.name, account.email, account.image_url
// 		ORDER BY account.name ASC
// 	  `;

//     const account = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return account;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }

// export async function getUser(email: string) {
//   try {
//     const user = await sql`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0] as User;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
