import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faPerson, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'



const Header = (type) => {
    let[opendate, setOpendate] = useState(false)
    let[date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    let[openoptions,setOpenoptions]= useState(false)
    let[options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption=(name,operation)=>{
        setOptions(prev=>{
            return{
                ...prev,[name]: operation==="i"? options[name]+1 : options[name]-1
            }
        })
    }
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerlist">
                    <div className="headerlistitems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerlistitems ">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headerlistitems ">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>

                    <div className="headerlistitems ">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerlistitems ">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
               {type !=="List" && 
               <> <h1 className='headerTitle'>A lifetime?, It's genius</h1>
                <p className='headerDesc'>Get rewarded for your travels, unlock instant savings of 10% or more with
                    manibookings. </p>
                <button className="headerBtn">Sign-in/Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='where are you going' className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span   onClick={()=>{setOpendate(!opendate)}} className="headerSearchtext">{`${format(date[0].startDate, "dd/MM/YYYy")} to ${format(date[0].endDate, "dd/MM/YYYy")} `}</span>
                    {opendate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=>setOpenoptions(!openoptions)} className='headerSearchtext'>{`${options.adult}adult - ${options.children}children - ${options.room}room`}</span>
                    {openoptions &&<div className="options">
                        <div className="optionsItems">
                            <span className="optiontext">Adults</span>
                            <div className="optionCounter">
                            <button className='optionCounterButtons' disabled={options.adult<=1} onClick={()=>handleOption('adult','d')}>-</button>
                            <span className="optionCounterNumber" >{options.adult}</span>
                            <button className='optionCounterButtons' onClick={()=>handleOption('adult','i')}>+</button>
                            </div>  
                        </div>
                        <div className="optionsItems">
                            <span className="optiontext">Children</span>
                            <div className="optionCounter">
                            <button className='optionCounterButtons' disabled={options.children<=0} onClick={()=>handleOption('children','d')}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className='optionCounterButtons' onClick={()=>handleOption('children','i')}>+</button>
                            </div>   
                        </div>
                        <div className="optionsItems">
                            <span className="optiontext">room</span>
                            <div className="optionCounter">
                            <button className='optionCounterButtons' disabled={options.room<=1} onClick={()=>handleOption('room','d')}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className='optionCounterButtons' onClick={()=>handleOption('room','i')}>+</button>
                            </div>  
                        </div>
                    </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div> </>}
            </div>

        </div>
    )
}

export default Header