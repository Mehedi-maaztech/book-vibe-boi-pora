import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../Utility/storeReadListDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadlist] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const storedReadList = getStoredList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        console.log(allBooks, storedReadList, storedReadListInt, readBookList);

        setReadlist(readBookList);
    }, [])

    const handleSort = (sortType) => {
        setSort(sortType);
        
        if(sortType === "No of pages"){
            const storedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadlist(storedReadList);
        }
        if(sortType === "Ratigs"){
            const storedReadList = [...readList].sort((a,b) => a.rating - b.rating);
            setReadlist(storedReadList);
        }
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl'>My read list {readList.length}</h2>
                    <div className='text-center'>
                        <div className="dropdown dropdown-bottom dropdown-center">
                            <div tabIndex={0} role="button" className="btn m-1">
                                {
                                    sort ? sort : "Sort by"
                                }
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={() => handleSort('Ratigs')}>Ratigs</a></li>
                                <li><a onClick={() => handleSort('No of pages')}>No of pages</a></li>
                            </ul>
                        </div>
                    </div>
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
        </div>
    );
};

export default ListedBooks;