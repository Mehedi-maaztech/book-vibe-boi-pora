import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../Utility/storeReadListDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadlist] = useState([]);
    useEffect(() => {
        const storedReadList = getStoredList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        console.log(allBooks, storedReadList, storedReadListInt, readBookList);

        setReadlist(readBookList);
    }, [])
    
    return (
        <Tabs>
            <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>    
            </TabList>

            <TabPanel>
                <h2 className='text-3xl'>My read list {readList.length}</h2>
                <div className='flex flex-wrap gap-10 m-5'>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <h2>My wish list</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ListedBooks;