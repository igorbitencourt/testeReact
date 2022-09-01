export const API_URL = "https://fakestoreapi.com";

export function USER_DELETE(id: any) {
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: "DELETE",
    },
  };
}
