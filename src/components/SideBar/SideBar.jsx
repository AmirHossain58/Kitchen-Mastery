

const SideBar = () => {
    return (
        <div className="border-2 ml-6 rounded-xl">
            <div>
                <h1 className="text-2xl font-semibold text-center">Want to cook: 01</h1>
                <div className="px-10"><hr /></div>
                <table  className="table-auto">
                   <thead>
                   <tr >
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                   </thead>
                   <tbody>

                   </tbody>
                    
                </table>
            </div>
            <div>
                <h1  className="text-2xl font-semibold text-center">Currently cooking: 02</h1>
                <hr />
                <table className="table-fixed">
                <thead>
                   <tr >
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                   </thead>
                </table>
            </div>
        </div>
    );
};

export default SideBar;