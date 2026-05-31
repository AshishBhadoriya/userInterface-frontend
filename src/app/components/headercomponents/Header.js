"use client"
import SearchBar from "./SearchBar";
import UserCart from "./User&Cart";
import styles from "./Header.module.css"
import { serverURL } from "@/app/services/FetchServices";

export default function Header()
{
    return(<div className={styles.headerBg} >
        <div className={styles.header}> 
            <img src={`${serverURL}/images/logo.png`} style={{width:'100px'}} />
            <SearchBar/>
            <UserCart/>    
        </div>
    </div>)
}