import userModels from "../models/users.models";

const resolvers = {
    Query: {
        async getAllUsers(phone: any) {
            console.log("Workings")
            const user = await userModels.find({phone: 432234});
            return user
        }
    }
};

export default resolvers 