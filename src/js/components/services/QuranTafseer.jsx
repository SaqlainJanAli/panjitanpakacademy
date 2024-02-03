import React from "react";
import { Container } from "react-bootstrap";

const QuranTafseer = () => {
  const styles = {
    body: {
      background: "linear-gradient(to right, white 10% , transparent )",
      borderRadius: "2%",
    },
    p: {
      marginBottom: "15px",
      textAlign: "justify",
    },
    header: {
      background: "linear-gradient(to right, green , lightgreen )",
      color: "white",
      textAlign: "center",
      padding: "5px",
    },
    highlight: {
      color: "#0066cc",
      fontWeight: "bold",
      fontStyle: "italic",
    },
    benefitsList: {
      listStyle: "number",
      marginLeft: "50px",
      padding: "4",
    },
    benefitsListItem: {
      marginBottom: "10px",
    },
  };

  return (
    <Container className="mt-5">
      <Container>
        <div style={styles.body} className="p-4">
          <h3 style={styles.header} className="">
            Embark on a Journey of Spiritual Insight: Our Quran Tafseer Unveiled
          </h3>
          <section>
            <p style={styles.p}>
              In our Quran Academy, we take pride in offering a profound
              exploration of the Quran through our comprehensive Tafseer
              program. Delving into the depths of divine wisdom, our Tafseer
              sessions go beyond mere recitation, providing a nuanced
              understanding of the sacred verses.
            </p>

            <h4 style={styles.h1}>Why Quran Tafseer Matters:</h4>
            <p style={styles.p}>
              Understanding the Quran is not just about reading the words; it's
              about unraveling the layers of meaning and context. Our Tafseer
              classes aim to bridge the gap between the ancient wisdom of the
              Quran and the contemporary world, offering relevance and
              applicability in today's context.
            </p>

            <h4 style={styles.h1}>What Sets Our Tafseer Apart:</h4>
            <ol style={styles.benefitsList}>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Scholarly Guidance:</span> Led by
                experienced scholars, our Tafseer classes ensure a scholarly and
                authentic interpretation of the Quranic verses.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Interactive Learning:</span> We
                believe in active engagement. Our classes foster discussions,
                encouraging students to ask questions and seek clarity on the
                verses, promoting a dynamic and enriching learning environment.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Contextual Relevance:</span> Our
                Tafseer doesn't just decipher ancient Arabic; it applies the
                teachings to modern-day challenges. We explore how the Quranic
                guidance can shape our lives in the 21st century.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Practical Insights:</span> Beyond
                theoretical knowledge, our Tafseer provides practical insights,
                guiding students on how to incorporate Quranic teachings into
                their daily lives.
              </li>
            </ol>

            <h4 style={styles.h1}>Benefits of Joining Our Tafseer Classes:</h4>
            <ul style={styles.benefitsList}>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Spiritual Enlightenment:</span>{" "}
                Witness a profound connection with the divine as you gain a
                deeper understanding of the Quran's spiritual messages.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Community Building:</span> Join a
                community of like-minded individuals on a shared journey of
                enlightenment, fostering a sense of belonging and camaraderie.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Intellectual Growth:</span>{" "}
                Challenge your mind and broaden your intellectual horizons
                through engaging discussions and thought-provoking reflections.
              </li>
              <li style={styles.benefitsListItem}>
                <span style={styles.highlight}>Application in Daily Life:</span>{" "}
                Our Tafseer doesn't just remain within the classroom. Learn how
                to apply the teachings of the Quran to navigate the complexities
                of modern life.
              </li>
            </ul>

            <p style={styles.p}>
              <h5 style={styles.highlight}>
                Join Us on this Spiritual Odyssey:
              </h5>{" "}
              If you're eager to embark on a journey of profound spiritual
              insight and intellectual growth, our Quran Tafseer classes are the
              perfect avenue. Enroll now to unravel the timeless wisdom of the
              Quran and transform your understanding of the divine. Together,
              let's explore the depths of the Quran and enrich our lives with
              its eternal guidance.
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
};

export default QuranTafseer;
