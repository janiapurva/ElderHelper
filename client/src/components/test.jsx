function RequestTableData(props) {
  return (
    <tbody>
      <tr>
        <td>{props.requestID}</td>
        <td>{props.posted_by}</td>
        <td>{props.date_of_request}</td>
        <td>{props.task_description}</td>
        <td>{props.task_postal_code}</td>
        <td>{props.date_posted}</td>
        <td>{props.fullilled_by_volunter}</td>
        <td>{props.status}</td>
        <Button variant="success" type="submit">
          Accept
        </Button>{" "}
      </tr>
    </tbody>
  );
}

export default function VolunteerRequestList(props) {
  console.log("props VolDispList ", props);

  const [successfulForm, setSuccessfulForm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("inside accept request");

    const volIdFromState = props.sessionID;

    const getData = () => {
      for (let i of props.listItem) {
        // console.log('props.listItem[]iiiiiiiiiiiiii', i.id)

        const returnObj = {
          requestID: i.id,
          userIDFromReq: i.posted_by,
          date_of_request: i.date_of_request,
          task_description: i.task_description,
          task_postal_code: i.task_postal_code,
          date_posted: i.date_posted,
          status: "Accepted",
        };

        return returnObj;
      }
    };

    let updateRequestObjVolunteerAccept = getData()

    // const requestID = props.listItem[0].id
    // const userIDFromReq = props.listItem[0].posted_by;
    // console.log("----voleIDFromReq---", volIdFromState);
    // const date_of_request = props.listItem[0].date_of_request;
    // const task_description = props.listItem[0].task_description;
    // const task_postal_code = props.listItem[0].task_postal_code;
    // const date_posted = props.listItem[0].date_posted;
    // const status = "accepted";

    // const updateRequestObjVolunteerAccept = {
    //   requestID:requestID,
    //   posted_by: userIDFromReq, //user_id we need from auth response
    //   date_of_request: date_of_request, // from form
    //   task_description: task_description, //
    //   task_postal_code: task_postal_code,
    //   date_posted: date_posted,
    //   fullilled_by_volunter: volIdFromState,
    //   status: status,
    // };

    console.log(
      "update object to send back to db",
      updateRequestObjVolunteerAccept
    );

    // useEffect((),[])

    axios
      .post("http://localhost:8000/updateRequest", {
        updateRequestObjVolunteerAccept,
      })
      .then((res) => {
        console.log("inside .then success update ");

        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });
  };
