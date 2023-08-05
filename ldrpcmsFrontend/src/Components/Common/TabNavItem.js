import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab, classes }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={classes}>
            {title}
        </li>
    );
};

export default TabNavItem;
