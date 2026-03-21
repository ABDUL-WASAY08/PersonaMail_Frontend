import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import api from "../Config/axios";
import toast from "react-hot-toast";
 const Userstore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      Registration: async ({ name, email, password }) => {
        set({ loading: true });
        try {
          const registerMutation = {
            query: `
                mutation register($name: String!, $email: String!, $password: String!){
  register(name: $name, email: $email, password: $password) {
    message
    status
    user {
      email
      id
      name
    }
  }
}
                `,
            variables: { name, email, password },
          };
          const response = await api.post("", registerMutation);
          if (response.data.errors) {
            throw new Error(response.data.errors[0].message);
          }
          const { user, status, message } = response.data.data.register;
          if (status) {
            set({ user, isAuthenticated: true, loading: false });
            return { status };
          }
          if (!status) throw new Error(message);
        } catch (error) {
          set({ loading: false });
          toast.error(error.message);
        }
      },
      login: async ({ email, password }) => {
        set({ loading: true });
        try {
          const loginMutation = {
            query: `
                mutation Login($email: String!, $password: String!){
                    login(email: $email, password: $password) {
                         message
                         status
                         user {
                               id
                               name
                               email
                              }
                    }
                }
                `,
            variables: { email, password },
          };
          const response = await api.post("", loginMutation);
          if (response.data.errors) {
            throw new Error(response.data.errors[0].message);
          }
          const { user, status, message } = response.data.data.login;
          if (status) {
            set({ user, isAuthenticated: true, loading: false });
            return { status };
          }
          if (!status) throw new Error(message);
        } catch (error) {
          set({ loading: false });
          toast.error(error.message);
        }
      },
      logout: async () => {
        set({ loading: true });
        try {
          const logout = {
            query: `
            mutation logout{
                logout {
                status
                message
                     }
            }
            `,
          };
          const response = await api.post("", logout);
          const { status, message } = response.data.data.logout;
          if (status) {
            set({ loading: false, isAuthenticated: false });
            toast.success(message);
          } else {
            throw new Error(message);
          }
        } catch (error) {
          set({ loading: false });
          toast.error(error.message);
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
export default Userstore
