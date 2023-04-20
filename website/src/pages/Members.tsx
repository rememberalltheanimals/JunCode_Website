import React from "react"

function members() {

  React.useEffect(() => {
    document.title = "Members | JunCode";  
  }, []);

  return (
    <main>
      <h2>JunCode: Members</h2>
      <p>Here is a quick list of the current JunCode members and their contact info.</p>
        <dl>
          <dt>Eunhae Hwang</dt>
          <dd>Email: <a href="mailto:lavieeunhae@gmail.com">lavieeunhae@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/eunhae-hwang-4a4282261/" target="_blank">www.linkedin.com/in/eunhae-hwang-4a4282261/</a></dd>
          <dd>GitHub: <a href="http://github.com/rememberalltheanimals" target="_blank">github.com/rememberalltheanimals</a></dd>
        </dl>
        <dl>
          <dt>Morgan Kruger</dt>
          <dd>Email: <a href="mailto:nagromkruger@gmail.com">nagromkruger@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/morgan-kruger/" target="_blank">www.linkedin.com/in/morgan-kruger/</a></dd>
          <dd>GitHub: <a href="http://github.com/MorganKruger" target="_blank">github.com/MorganKruger</a></dd>
        </dl>
        <dl>
          <dt>Jacoby Yliniemi</dt>
          <dd>Email: <a href="mailto:cobyyliniemi@gmail.com">cobyyliniemi@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/jacoby-yliniemi/" target="_blank">www.linkedin.com/in/jacoby-yliniemi/</a></dd>
          <dd>GitHub: <a href="http://github.com/Jacoby-Y" target="_blank">github.com/Jacoby-Y</a></dd>
        </dl>
        <dl>
          <dt>Joe Shmoe</dt>
          <dd>Email: No Email</dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/" target="_blank">www.linkedin.com</a></dd>
          <dd>GitHub: <a href="http://github.com/" target="_blank">github.com</a></dd>
        </dl>
    </main>
  )
}

export default members