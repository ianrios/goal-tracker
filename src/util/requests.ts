interface FetchParams {
  path: string;
}

export const getRequest = async ({ path }: FetchParams) => {
  try {
    const response = await fetch(`/api/${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log({ result });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
