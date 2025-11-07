import React, { useState } from 'react'; // <-- 1. IMPORT useState
import styles from '../pages_style/Dashboard.module.css';

// Importing icons from react-icons
import { 
  FiPlus, 
  FiUser, 
  FiFilter, 
  FiSearch, 
  FiCheckCircle, 
  FiChevronDown 
} from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { GrResources } from "react-icons/gr"; // <-- Added icon for "Results"

// Notice: No ": React.FC" here
const Dashboard = () => {
  // --- 2. CREATE STATE VARIABLES ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showVerified, setShowVerified] = useState(false);
  
  return (
    <div className={styles.dashboard}>
      {/* --- Header --- */}
      <header className={styles.header}>
        <div className={styles.logo}>
          {/* You can replace this <img> with your actual logo file */}
          <img src="/logo-icon.svg" alt="Logo" className={styles.logoIcon} /> 
          Community Resource Mapper
        </div>
        <div className={styles.headerActions}>
          <button className={styles.addButton}>
            <FiPlus /> Add New Resource
          </button>
          <FiUser className={styles.userIcon} />
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className={styles.mainContent}>
        {/* --- Map Area (Left) --- */}
        <div className={styles.mapArea}>
          {/* TODO: Replace this placeholder with your interactive map component */}
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
                  // --- 3. CONNECT STATE ---
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
                  // --- 3. CONNECT STATE ---
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
                  // --- 3. CONNECT STATE ---
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
                <GrResources /> Results {/* <-- Used new icon */}
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