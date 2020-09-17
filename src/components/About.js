import React from 'react'
import Title from './Title'
import styles from '../css/about.module.css'
import img from '../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="À propos " subtitle=" de nous" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="partir-en-algerie"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4> Bab el oued la meilleure agence</h4>
          <p>
            Bab El Oued (en arabe : باب الواد ; « porte de la Rivière »)
            est une commune de la wilaya d'Alger en Algérie, mais aussi
            un quartier populaire de la ville historique d'Alger.
          </p>
          <p>
            Situés sur la façade maritime nord de la ville vivent 100 000 personnes.
            Célèbre par sa place des Trois-Horloges et par son marché Triolet,
            elle possède de nombreux ateliers et manufactures.
          </p>
          <button type="button" className="btn-primary">En savoir plus</button>
        </article>
      </div>
    </section>
  )
}

export default About
