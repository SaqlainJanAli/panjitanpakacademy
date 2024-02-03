import React from "react";
import { Accordion, Container, Card, Button } from "react-bootstrap";

const FiqhiMasail = () => {
  const styles = {
    body: {
      background: "linear-gradient(to right, white 10% , transparent )",
      borderRadius: "2%",
    },
    header: {
      background: "linear-gradient(to right, green , lightgreen )",
      color: "white",
      textAlign: "center",
      padding: "5px",
    },
    h1: {},
    p: {
      marginBottom: "15px",
      textAlign: "justify",
    },
    highlight: {
      color: "#0066cc",
      fontWeight: "bold",
    },
  };

  return (
    <Container>
      <Container className="mt-5">
        <div style={styles.body} className="p-5">
          <h1 style={styles.header}>
            Fiqhi Masail{" "}
            <span style={{ fontFamily: "AlQalamTajNastaleeq" }}>
              {" "}
              (فقہی مسائل)
            </span>
            : Your Daily Guide to Islamic Jurisprudence
          </h1>

          <section>
            <p style={styles.p}>
              At our esteemed academy, we understand that navigating the
              intricacies of daily life in accordance with Islamic principles
              requires guidance. Introducing our Fiqhi Masail program – a beacon
              of knowledge and wisdom where skillful teachers are dedicated to
              answering your daily life propositions in light of Quran, Sunnah,
              and Fatawas of Faqih.
            </p>
            {/* 
            <Accordion style={{ marginBottom: "20px" }}>
              <Card>
                <Accordion.Toggle>
                  What Sets Our Fiqhi Masail Program Apart
                </Accordion.Toggle>
                <Accordion.Collapse>
                  <Card.Body>
                    <ul>
                      <li>
                        <span style={styles.highlight}>Expert Guidance:</span>{" "}
                        Our team of knowledgeable and experienced teachers
                        possess deep insights into Fiqhi Masail, ensuring
                        accurate and reliable responses to your inquiries.
                      </li>
                      <li>
                        <span style={styles.highlight}>
                          Daily Life Scenarios:
                        </span>{" "}
                        We recognize the importance of addressing real-life
                        situations. Our program focuses on providing solutions
                        to practical issues you may encounter in your day-to-day
                        activities.
                      </li>
                      <li>
                        <span style={styles.highlight}>Quran and Sunnah:</span>{" "}
                        Our teachings are firmly rooted in the Quran and Sunnah,
                        ensuring that the guidance you receive aligns with the
                        divine sources of Islam.
                      </li>
                      <li>
                        <span style={styles.highlight}>Fatawas of Faqih:</span>{" "}
                        Benefit from the scholarly opinions and legal verdicts
                        of renowned jurists, offering a comprehensive
                        understanding of Islamic jurisprudence.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion style={{ marginBottom: "20px" }}>
              <Card>
                <Accordion.Toggle>How Our Program Works</Accordion.Toggle>
                <Accordion.Collapse>
                  <Card.Body>
                    <ol>
                      <li>
                        <span style={styles.highlight}>
                          Submit Your Queries:
                        </span>{" "}
                        Have a question about a specific situation or dilemma?
                        Submit your queries to our platform, and our qualified
                        teachers will address them with diligence and care.
                      </li>
                      <li>
                        <span style={styles.highlight}>Daily Guidance:</span>{" "}
                        Receive daily insights and solutions to Fiqhi Masail,
                        providing you with the clarity needed to lead a life in
                        accordance with Islamic principles.
                      </li>
                      <li>
                        <span style={styles.highlight}>
                          Interactive Learning:
                        </span>{" "}
                        Engage in discussions, participate in Q&A sessions, and
                        enhance your understanding of Fiqhi Masail in a
                        collaborative and supportive online community.
                      </li>
                    </ol>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <p style={styles.p}>
              <span style={styles.highlight}>
                Join us on this enlightening journey
              </span>{" "}
              as we navigate the complexities of daily life through the lens of
              Islamic jurisprudence. Our Fiqhi Masail program is designed to
              empower you with the knowledge needed to make informed decisions
              while upholding the principles of Islam.
            </p>

            <Card style={{ marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title>
                  Enrich Your Understanding, Enrich Your Life
                </Card.Title>
                <Card.Text>
                  **Submit your queries today, and let the wisdom of Fiqhi
                  Masail guide your path towards a more fulfilling and righteous
                  life.**
                </Card.Text>
              </Card.Body>
            </Card> */}
            <h5 style={styles.p}>What Sets Our Fiqhi Masail Program Apart:</h5>

            <ol>
              <li style={styles.p}>
                <span style={styles.highlight}>Expert Guidance:</span> Our team
                of knowledgeable and experienced teachers possess deep insights
                into Fiqhi Masail, ensuring accurate and reliable responses to
                your inquiries.
              </li>
              <li style={styles.p}>
                <span style={styles.highlight}>Daily Life Scenarios:</span> We
                recognize the importance of addressing real-life situations. Our
                program focuses on providing solutions to practical issues you
                may encounter in your day-to-day activities.
              </li>
              <li style={styles.p}>
                <span style={styles.highlight}>Quran and Sunnah:</span> Our
                teachings are firmly rooted in the Quran and Sunnah, ensuring
                that the guidance you receive aligns with the divine sources of
                Islam.
              </li>
              <li style={styles.p}>
                <span style={styles.highlight}>Fatawas of Faqih:</span> Benefit
                from the scholarly opinions and legal verdicts of renowned
                jurists, offering a comprehensive understanding of Islamic
                jurisprudence.
              </li>
            </ol>

            <h5 style={styles.p}>How Our Program Works:</h5>

            <ol>
              <li style={styles.p}>
                <span style={styles.highlight}>Submit Your Queries:</span> Have
                a question about a specific situation or dilemma? Submit your
                queries to our platform, and our qualified teachers will address
                them with diligence and care.
              </li>
              <li style={styles.p}>
                <span style={styles.highlight}>Daily Guidance:</span> Receive
                daily insights and solutions to Fiqhi Masail, providing you with
                the clarity needed to lead a life in accordance with Islamic
                principles.
              </li>
              <li style={styles.p}>
                <span style={styles.highlight}>Interactive Learning:</span>{" "}
                Engage in discussions, participate in Q&A sessions, and enhance
                your understanding of Fiqhi Masail in a collaborative and
                supportive online community.
              </li>
            </ol>

            <p style={styles.p}>Enrich Your Understanding, Enrich Your Life:</p>

            <p style={styles.p}>
              <h5 style={styles.highlight}>
                Join us on this enlightening journey
              </h5>{" "}
              as we navigate the complexities of daily life through the lens of
              Islamic jurisprudence. Our Fiqhi Masail program is designed to
              empower you with the knowledge needed to make informed decisions
              while upholding the principles of Islam.
            </p>

            <p style={styles.p}>
              Submit your queries today, and let the wisdom of Fiqhi Masail
              guide your path towards a more fulfilling and righteous life.
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
};

export default FiqhiMasail;
