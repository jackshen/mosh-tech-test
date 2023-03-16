import axios, { AxiosResponse } from "axios";

export type MoshHeroOptions = Record<string, string[]>;

const fetchTriviaQuestions = async () => {
  try {
    const response: AxiosResponse<MoshHeroOptions> = await axios({
      baseURL: "https://moshhero.free.beeceptor.com/my/api/options",
      method: "get",
    });

    return response.data;
  } catch (err) {
    return {} as MoshHeroOptions;
  }
};

export default fetchTriviaQuestions;
