interface IErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is IErrorWithMessage =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof error.message === "string";

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

try {
  throw new Error("some error!!!");
  throw "some string error!!";
  throw ["some", "array", "error"];
} catch (error) {
  //  catch (error) {
  //   console.log((error as Error).message);
  // }

  const { message } = toErrorWithMessage(error);
  console.log("err msg:", message);
}
