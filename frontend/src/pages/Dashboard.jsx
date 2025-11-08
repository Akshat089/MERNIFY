import React, { useState } from 'react';
import styles from '../pages_style/Dashboard.module.css';
import { useNavigate } from "react-router-dom";

// Importing icons from react-icons
import { 
  FiPlus, 
  FiUser, 
  FiFilter, 
  FiSearch, 
  FiCheckCircle, 
  FiChevronDown,
  FiLogOut, // <-- Added icon
  FiUserCheck // <-- Added icon
} from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { GrResources } from "react-icons/gr";

const Dashboard = () => {
  const logout = async () => {
    localStorage.removeItem("token");
    navigate("/");
    alert("You have been logged out successfully!");
  };
  const navigate = useNavigate();
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showVerified, setShowVerified] = useState(false);
  
  // --- 1. ADD NEW STATE FOR DROPDOWN ---
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={styles.dashboard}>
      {/* --- Header --- */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo-icon.svg" alt="Logo" className={styles.logoIcon} /> 
          Community Resource Mapper
        </div>
        
        {/* --- 2. UPDATED HEADER ACTIONS --- */}
        <div className={styles.headerActions}>
          <button className={styles.addButton}>
            <FiPlus /> Add New Resource
          </button>
          
          {/* Profile Button & Dropdown */}
          <div className={styles.profileMenu}>
            <button 
              className={styles.profileButton} 
              onClick={() => setIsProfileOpen(!isProfileOpen)} // Toggle menu
            >
              <FiUser />
            </button>

            {/* Show dropdown if isProfileOpen is true */}
            {isProfileOpen && (
              <div className={styles.profileDropdown}>
                <a href="/profile" className={styles.dropdownItem}>
                  <FiUserCheck /> Profile
                </a>
                <button className={styles.dropdownItem} onClick={() => {
                  logout();        // clear login state
                  }}>
                  <FiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className={styles.mainContent}>
        {/* ... (rest of your mapArea and sidebar code is unchanged) ... */}

        {/* --- Map Area (Left) --- */}
        <div className={styles.mapArea}>
          <div className={styles.mapPlaceholder}>
            <FaMapMarkedAlt className={styles.mapIcon} />
            <h2>Interactive Map</h2>
            <p>Map integration will display community resources with location pins, search radius, and interactive markers</p>
            <button className={styles.enableButton}>
              <IoLocationOutline /> Enable Location
            </button>
          </div>
          <span className={styles.mapViewText}>Map view</span>
        </div>

        {/* --- Sidebar (Right) --- */}
        <aside className={styles.sidebar}>
          {/* Filters Section */}
          <section className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>
              <FiFilter /> Filters
            </h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="search">Search by name</label>
              <div className={styles.inputWrapper}>
                <FiSearch className={styles.inputIcon} />
                <input
                  type="text"
                  id="search"
                  placeholder="Enter resource name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <div className={styles.selectWrapper}>
                <select 
                  id="category" 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All categories</option>
                  <option value="food">Food Bank</option>
                  <option value="wifi">Free Wi-Fi</option>
                  <option value="water">Water Fountain</option>
                </select>
                <FiChevronDown className={styles.selectIcon} />
              </div>
            </div>

            <div className={styles.toggleGroup}>
              <div className={styles.toggleLabel}>
                <FiCheckCircle />
                <span>Show Verified Only</span>
              </div>
              <label className={styles.toggleSwitch}>
                <input 
                  type="checkbox" 
                  checked={showVerified}
                  onChange={(e) => setShowVerified(e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </section>

          {/* Results Section */}
          <section className={styles.resultsSection}>
            <h3 className={styles.sectionTitle}>
              <div className={styles.resultsTitle}>
                <GrResources /> Results
              </div>
              <span className={styles.resultsBadge}>0</span>
            </h3>
            
            <div className={styles.emptyResults}>
              <p>No resources found matching your filters</p>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;