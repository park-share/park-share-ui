import React from 'react';
import FilteredItems from './FilteredItems.jsx';

const Filters =  (props) => {
    let {filters} = props;
    if (filters !== undefined && filters.length > 0) {
        return (
            <div>
                <form>
                    Find spots near zipcode: <input onChange={(e) => props.handleZipFilter(e)} type='number'></input>
                    On date: <input type='date'></input>
                    In the: <select>
                        <option>-</option>
                        <option>Early Morning 2am-7am </option>
                        <option>Morning 7am-12pm</option>
                        <option>Afternoon 12pm-5pm</option>
                        <option>Evening 5pm-10pm</option>
                        <option>Late Evening 10pm-2am </option>
                    </select>
                    <button onClick={e => props.handleFilterSubmit(e)}>Filter</button>
                </form>
                <div>
                    <FilteredItems filters={filters} />
                </div>
            </div>
        )
    } else {
        return (
            <form>
                    Find spots near zipcode: <input onChange={(e) => props.handleZipFilter(e)} type='number'></input>
                    On date: <input type='date'></input>
                    In the: <select>
                        <option>-</option>
                        <option>Early Morning 2am-7am </option>
                        <option>Morning 7am-12pm</option>
                        <option>Afternoon 12pm-5pm</option>
                        <option>Evening 5pm-10pm</option>
                        <option>Late Evening 10pm-2am </option>
                    </select>
                    <button>Filter</button>
                </form>
        )
    }
}

export default Filters;