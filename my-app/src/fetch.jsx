const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(response.staus);
  } catch (error) {
    console.log("The status:", error);
  }
};

export default fetchApi;
