import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Progress from "./Progress";

const Skilltest = () => {
  const [rank, setRank] = useState(12433);
  const [percents, setPercents] = useState(35);
  const [answer, setAnswer] = useState(5);

  const [show, setShow] = useState(false);

  const [rank1, setRank1] = useState(12433);
  const [percent1, setPercents1] = useState(35);
  const [answer1, setAnswer1] = useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleRankChange = (e) => {
  //    console.log(e.target.value)
  //    setRank(e.target.value)
  // }

  const data = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
    datasets: [
      {
        label: "Your score",
        data: [0, 0, percents, 0, 0, 0],
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <div className="section-skilltest col-lg-7">
        <p style={{ fontSize: "15px", fontWeight: "400", color: "#566474" }}>
          Skill Test
        </p>

        <div className="html">
          <div style={{ display: "flex" }}>
            <img
              src={require("../img/html.png")}
              alt=""
              style={{ marginRight: "20px" }}
            />
            <div>
              <p style={{ fontWeight: "bold" }}> Hypertext Markup Language</p>
              <p>
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2022
              </p>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary"
              id="update"
              onClick={handleShow}
            >
              Update
            </button>
          </div>
        </div>

        <div className="quick-statistics">
          <p style={{ fontWeight: "bold" }}>Quick Statistics</p>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Update Skill Scores</Modal.Title>
              <img src={require("../img/html.png")} alt="" />
            </Modal.Header>

            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={require("../img/one.png")}
                    alt=""
                    style={{
                      width: "25px",
                      height: "28px",
                      marginRight: "10px",
                    }}
                  />
                  <p>Update your rank</p>
                </div>
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  style={{
                    height: "25px",
                    width: "100px",
                    textAlign: "center",
                    color: "#142683",
                    fontWeight: "500",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={require("../img/one.png")}
                    alt=""
                    style={{
                      width: "25px",
                      height: "28px",
                      marginRight: "10px",
                    }}
                  />
                  <p>Update your percentile(Out of 100%)</p>
                </div>
                <input
                  type="text"
                  value={percents}
                  onChange={(e) => setPercents(e.target.value)}
                  style={{
                    height: "25px",
                    width: "100px",
                    textAlign: "center",
                    color: "#142683",
                    fontWeight: "500",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={require("../img/one.png")}
                    alt=""
                    style={{
                      width: "25px",
                      height: "28px",
                      marginRight: "10px",
                    }}
                  />
                  <p>Update your current score(Out of 15)</p>
                </div>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  style={{
                    height: "25px",
                    width: "100px",
                    textAlign: "center",
                    color: "#142683",
                    fontWeight: "500",
                  }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} id="cancel">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={() => {
                  setRank1(rank);
                  setPercents1(percents);
                  setAnswer1(answer);
                  handleClose();
                }}
                id="save"
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                width: "33%",
                borderRight: "1px solid #EBF0F5",
              }}
            >
              <div className="cup-wrapper" style={{ marginRight: "20px" }}>
                <img src={require("../img/cup.png")} alt="" className="cup" />
              </div>
              <div>
                <h4 style={{ marginBottom: "5px" }}>{rank1}</h4>
                <p style={{ fontSize: "12px", color: "#9EAAB7" }}>YOUR RANK</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "33%",

                borderRight: "1px solid #EBF0F5",
              }}
            >
              <div className="cup-wrapper" style={{ marginRight: "20px" }}>
                <img src={require("../img/note.png")} alt="" className="cup" />
              </div>
              <div>
                <h4 style={{ marginBottom: "5px" }}>{percent1} %</h4>
                <p style={{ fontSize: "12px", color: "#9EAAB7" }}>PERCENTILE</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div className="cup-wrapper" style={{ marginRight: "20px" }}>
                <img
                  src={require("../img/correct.png")}
                  alt=""
                  className="cup"
                />
              </div>
              <div>
                <h4 style={{ marginBottom: "5px" }}>{answer1} / 15</h4>
                <p style={{ fontSize: "12px", color: "#9EAAB7" }}>
                  CORRECT ANSWERS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="graph">
          <Line data={data} />
        </div>
      </div>

      <div className="section-analysis col-lg-3">
        <div className="syllabus-analysis">
          <p style={{ fontWeight: "500" }}>Syllabus Wise Analysis</p>
          <div className="progress-item">
            <p>HTML Tools,Forms,History</p>
            <Progress done="70" color="#438af6" bgColor="#cde1ff" />
          </div>
          <div className="progress-item">
            <p>Tags & References in HTML</p>
            <Progress done="60" color="#FF9142" bgColor="#f8dbc6" />
          </div>
          <div className="progress-item">
            <p>Tables & CSS Basics</p>
            <Progress done="24" color="#FB5E5E" bgColor="#f8cbcb" />
          </div>
          <div className="progress-item">
            <p>Tables & CSS Basics</p>
            <Progress done="96" color="#2EC971" bgColor="#c2f7d9" />
          </div>
        </div>
        <div className="question-analysis">
          <p style={{ fontWeight: "500" }}>Question Analysis</p>
          <p>
            You scored {answer1} questions out of 15. However it still needs
            some improvements.
          </p>
          <Doughnut
            data={{
              datasets: [
                {
                  label: "My First Dataset",
                  data: [answer1, 15 - answer1],
                  backgroundColor: ["rgb(67, 138, 246)", "rgb(205, 225, 255)"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Skilltest;
