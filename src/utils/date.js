import moment from "moment";

const formatIncomingDate = (data) => {
  const day = moment(data?.created_at).format("D");
  const month = moment(data?.created_at).format("MMMM");
  const year = moment(data?.created_at).format("YYYY");
  const monthText = month.slice(0, 3);

  return `${day} ${monthText} ${year}`;
};

export { formatIncomingDate };
