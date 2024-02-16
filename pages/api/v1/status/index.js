import database from "infra/database";

async function status(request, responde) {
  responde.status(200).json({});
}

export default status;
