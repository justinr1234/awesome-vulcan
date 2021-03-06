import { name, description, links, userId } from "../commonSchemas";
const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ["guests"]
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ["guests"],
    onCreate: ({ newDocument, currentUser }) => {
      return new Date();
    }
  },

  name,
  description,
  ...links,
  userId
};

export default schema;
