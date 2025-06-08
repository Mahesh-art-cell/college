import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import React from 'react';

const UniversityLogos = () => {
  const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      width: '100%',
      maxWidth: '900px',
      height: 'auto'
    },
    topRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem',
      alignItems: 'center'
    },
    middleRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem',
      alignItems: 'center'
    },
    bottomRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem',
      alignItems: 'center'
    },
    viyansRow: {
      display: 'flex',
      justifyContent: 'center'
    },
    logoItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80px',
      padding: '0.5rem',
      textAlign: 'center'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    marwadiContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    marwadiIcon: {
      width: '2rem',
      height: '2rem',
      backgroundColor: '#0891b2',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginRight: '0.5rem'
    },
    marwadiText: {
      textAlign: 'left'
    },
    marwadiTitle: {
      fontWeight: 'bold',
      color: '#1f2937',
      fontSize: '1rem',
      lineHeight: '1.2'
    },
    marwadiSubtitle: {
      fontSize: '0.75rem',
      color: '#6b7280',
      lineHeight: '1'
    },
    naacSrmContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    },
    naacItem: {
      textAlign: 'center'
    },
    naacCircle: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      margin: '0 auto 0.25rem'
    },
    srmCircle: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#ca8a04',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      margin: '0 auto 0.25rem'
    },
    smallText: {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#374151'
    },
    uttaranchalContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    uttaranchalIcon: {
      width: '3rem',
      height: '3rem',
      backgroundColor: '#2563eb',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginRight: '0.75rem'
    },
    uttaranchalText: {
      textAlign: 'left'
    },
    uttaranchalTitle: {
      fontWeight: 'bold',
      color: '#2563eb',
      fontSize: '0.875rem',
      lineHeight: '1.1'
    },
    uttaranchalBadge: {
      fontSize: '0.625rem',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.125rem 0.375rem',
      borderRadius: '0.25rem',
      marginTop: '0.25rem',
      display: 'inline-block'
    },
    amritaContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    amritaIcon: {
      width: '3rem',
      height: '3rem',
      backgroundColor: '#e91e63',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      marginRight: '0.75rem'
    },
    amritaText: {
      textAlign: 'left'
    },
    amritaTitle: {
      fontWeight: 'bold',
      color: '#e91e63',
      fontSize: '1.125rem',
      lineHeight: '1.1'
    },
    amritaSubtitle: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    bharathContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem'
    },
    portraitIcon: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#ea580c',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.875rem'
    },
    bharathText: {
      textAlign: 'left'
    },
    bharathTitle: {
      fontWeight: 'bold',
      color: '#dc2626',
      fontSize: '0.875rem',
      lineHeight: '1.1'
    },
    bharathSubtitle: {
      fontSize: '0.625rem',
      color: '#6b7280'
    },
    itmContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    itmIcon: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#dc2626',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.625rem',
      marginRight: '0.75rem'
    },
    itmText: {
      textAlign: 'left'
    },
    itmTitle: {
      fontWeight: 'bold',
      color: '#dc2626',
      fontSize: '0.875rem',
      lineHeight: '1.1'
    },
    itmSubtitle: {
      fontSize: '0.625rem',
      color: '#6b7280'
    },
    vitContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    vitIcon: {
      width: '3rem',
      height: '3rem',
      backgroundColor: '#1e3a8a',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      marginRight: '0.75rem'
    },
    vitText: {
      textAlign: 'left'
    },
    vitTitle: {
      fontWeight: 'bold',
      color: '#1e3a8a',
      fontSize: '1.125rem',
      lineHeight: '1.1'
    },
    vitSubtitle: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    vitMicrotext: {
      fontSize: '0.625rem',
      color: '#9ca3af'
    },
    manavContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    manavIcon: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#ea580c',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      marginRight: '0.75rem'
    },
    manavText: {
      textAlign: 'left'
    },
    manavTitle: {
      fontWeight: 'bold',
      color: '#dc2626',
      fontSize: '0.875rem',
      lineHeight: '1.1'
    },
    manavSubtitle: {
      fontSize: '0.625rem',
      color: '#6b7280'
    },
    viyansCard: {
      border: '2px solid #2563eb',
      borderRadius: '0.5rem',
      padding: '1rem',
      backgroundColor: 'white',
      maxWidth: '280px'
    },
    viyansContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    viyansIconOuter: {
      width: '3.5rem',
      height: '3.5rem',
      backgroundColor: '#2563eb',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '0.75rem'
    },
    viyansIconInner: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: '#ea580c',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem'
    },
    viyansText: {
      textAlign: 'left'
    },
    viyansTitle: {
      fontWeight: 'bold',
      color: '#2563eb',
      fontSize: '1.125rem',
      lineHeight: '1.1'
    },
    viyansSubtitle: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    viyansButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontWeight: 'bold',
      border: 'none',
      fontSize: '0.875rem',
      width: '100%',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* First Row */}
        <div style={styles.topRow}>
          {/* Marwadi University */}
          <div style={styles.logoItem}>
            <div style={styles.marwadiContainer}>
              <div style={styles.marwadiIcon}>M</div>
              <div style={styles.marwadiText}>
                <div style={styles.marwadiTitle}>Marwadi</div>
                <div style={styles.marwadiSubtitle}>UNIVERSITY</div>
                <div style={styles.marwadiSubtitle}>Rajkot | Gujarat | India</div>
              </div>
            </div>
          </div>

          {/* NAAC & SRM */}
          <div style={styles.logoItem}>
            <div style={styles.naacSrmContainer}>
              <div style={styles.naacItem}>
                <div style={styles.naacCircle}>A+</div>
                <div style={styles.smallText}>NAAC</div>
              </div>
              <div style={styles.naacItem}>
                <div style={styles.srmCircle}>SRM</div>
                <div style={styles.smallText}>UNIVERSITY AP</div>
              </div>
            </div>
          </div>

          {/* Uttaranchal University */}
          <div style={styles.logoItem}>
            <div style={styles.uttaranchalContainer}>
              <div style={styles.uttaranchalIcon}>UU</div>
              <div style={styles.uttaranchalText}>
                <div style={styles.uttaranchalTitle}>UTTARANCHAL</div>
                <div style={styles.uttaranchalTitle}>UNIVERSITY</div>
                <div style={styles.uttaranchalBadge}>NAAC GRADE A+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div style={styles.middleRow}>
          {/* Amrita University */}
          <div style={styles.logoItem}>
            <div style={styles.amritaContainer}>
              <div style={styles.amritaIcon}>A</div>
              <div style={styles.amritaText}>
                <div style={styles.amritaTitle}>AMRITA</div>
                <div style={styles.amritaSubtitle}>VISHWA VIDYAPEETHAM</div>
              </div>
            </div>
          </div>

          {/* Portrait & Bharath University */}
          <div style={styles.logoItem}>
            <div style={styles.bharathContainer}>
              <div style={styles.portraitIcon}>P</div>
              <div style={styles.bharathText}>
                <div style={styles.bharathTitle}>Bharath</div>
                <div style={styles.bharathTitle}>UNIVERSITY</div>
                <div style={styles.bharathSubtitle}>BIHER | CHENNAI</div>
              </div>
            </div>
          </div>

          {/* ITM University */}
          <div style={styles.logoItem}>
            <div style={styles.itmContainer}>
              <div style={styles.itmIcon}>ITM</div>
              <div style={styles.itmText}>
                <div style={styles.itmTitle}>ITM</div>
                <div style={styles.itmTitle}>UNIVERSITY</div>
                <div style={styles.itmSubtitle}>GWALIOR | MP | INDIA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div style={styles.bottomRow}>
          {/* VIT */}
          <div style={styles.logoItem}>
            <div style={styles.vitContainer}>
              <div style={styles.vitIcon}>QUU</div>
              <div style={styles.vitText}>
                <div style={styles.vitTitle}>QUU</div>
                <div style={styles.vitSubtitle}>Quantum University Uttarakhand</div>
                <div style={styles.vitMicrotext}>8121634333, 9963523543</div>
              </div>
            </div>
          </div>

          {/* Manav Rachna */}
          <div style={styles.logoItem}>
            <div style={styles.manavContainer}>
              <div style={styles.manavIcon}>MR</div>
              <div style={styles.manavText}>
                <div style={styles.manavTitle}>MANAV</div>
                <div style={styles.manavTitle}>RACHNA</div>
                <div style={styles.manavSubtitle}>vidyantarashtriya</div>
              </div>
            </div>
          </div>

          {/* ITM University (Second) */}
          <div style={styles.logoItem}>
            <div style={styles.itmContainer}>
              <div style={styles.itmIcon}>ITM</div>
              <div style={styles.itmText}>
                <div style={styles.itmTitle}>ITM</div>
                <div style={styles.itmTitle}>UNIVERSITY</div>
                <div style={styles.itmSubtitle}>GWALIOR | MP | INDIA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Viyans Education */}
        <div style={styles.viyansRow}>
          <div style={styles.viyansCard}>
            <div style={styles.viyansContainer}>
              <div style={styles.viyansIconOuter}>
                <div style={styles.viyansIconInner}>V</div>
              </div>
              <div style={styles.viyansText}>
                <div style={styles.viyansTitle}>VIYANS</div>
                <div style={styles.viyansTitle}>EDUCON</div>
                <div style={styles.viyansSubtitle}>Educational Consultancy</div>
              </div>
            </div>
            <button style={styles.viyansButton}>VIJAYAWADA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityLogos;
