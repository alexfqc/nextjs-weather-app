"use server";

type TReturn<T> =
  | { status: "success"; data: T }
  | { status: "error"; errorMessage: string };

const fetchData = async <T>(url: string): Promise<TReturn<T>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { status: "error", errorMessage: response.statusText };
    }

    const data = await response.json();
    return {
      status: "success",
      data,
    };
  } catch (error) {
    return { status: "error", errorMessage: (error as Error).message };
  }
};

export default fetchData;
