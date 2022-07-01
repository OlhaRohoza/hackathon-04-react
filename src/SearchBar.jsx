import { DateTime } from 'luxon';

export function SearchBar({ setFlyfrom, setFlyto, setDatefrom, setDateto, directFlights, setDirectflights, setLimit, fetchData }) {
    // DateTime.fromISO()

    return (
        <div className="search--bar">
            <div className="search--part-one">
                <div className="parts">
                    <label className="parts--one">FROM:</label>
                    {/* <input type='text' /> */}
                    <select onChange={(e) => setFlyfrom(e.target.value)} defaultValue={"PRG"}>
                        <option value="PRG">Prague</option>
                        <option value="BER">Berlin</option>
                        <option value="WAW">Warsaw</option>
                        <option value="PED">Pardubice</option>
                    </select>
                </div>
                <div className="parts">
                    <label className="parts--one">TO:</label>
                    {/* <input type='text' /> */}
                    <select onChange={(e) => setFlyto(e.target.value)} defaultValue={"VLC"}  >
                        <option value="VLC">Valencia</option>
                        <option value="BCN">Barcelona</option>
                        <option value="MAD">Madrid</option>
                        <option value="MIL">Milan</option>
                        <option value="ATH">Athens</option>
                    </select>
                </div>
            </div>
            <br />
            {/* "Valencia", "Barcelona", "Madrid", "Milano" and "Athens"  */}
            <div className="search--part-two">
                <div className="parts">
                    <label className="parts--one">DATE FROM:</label>
                    <input type="date" onChange={(e) => setDatefrom(DateTime.fromISO(e.target.value).toFormat('dd/MM/yyyy'))} defaultValue="2022-07-01" />
                </div>
                <div className="parts">
                    <label className="parts--one">DATE TO:</label>
                    <input type="date" onChange={(e) => setDateto(DateTime.fromISO(e.target.value).toFormat('dd/MM/yyyy'))} defaultValue="2022-07-01" />
                </div>
            </div>
            < br />
            <div className="search--part-three">
                <div className="parts">
                    <label className="parts--one">Limit:</label>
                    <input type="number" defaultValue={5} onChange={(e) => setLimit(e.target.value)} />
                </div>
                <div className="parts">
                    <label className="parts--one">direct flights only</label>
                    <input className='checkbox' type="checkbox" onChange={(e) => setDirectflights(!directFlights)} />
                    <button onClick={fetchData} ><strong>Search</strong></button>


                </div>
            </div>
            <br />
            <div className="search--part-four">
                <div className="parts">

                </div>
            </div>
            <br />



        </div>
    )
}