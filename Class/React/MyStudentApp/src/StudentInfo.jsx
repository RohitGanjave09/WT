function StudentInfo(props) {
  // const fname = "Tahir";
  // const age = 21;
  // const course = AIML;

  return (
    <>
      <h1>My name is {props.fname}</h1>
      <h2>My age is {props.age}</h2>
      <h3>I am doing {props.course} course</h3>
    </>
  );
}
export default StudentInfo;
