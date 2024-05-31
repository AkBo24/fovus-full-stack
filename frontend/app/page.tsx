import Image from 'next/image';

export default function Home() {
    return (
        <main className='min-h-screen flex-col items-center justify-between p-12'>
            <h1 className='text-4xl'>Fovus Full Stack App - Akshay Bodla</h1>
            <form className='max-w-sm mx-auto mt-16'>
                <div className='mb-5'>
                    <label
                        for='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Text Input
                    </label>
                    <input
                        id='text'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                    />
                </div>
                <label
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    for='file'>
                    Upload file
                </label>
                <input
                    className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                    aria-describedby='file_help'
                    id='file'
                    type='file'
                />
                <div
                    className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                    id='file_help'>
                    An input to upload a file
                </div>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 mt-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Submit
                </button>
            </form>
        </main>
    );
}
