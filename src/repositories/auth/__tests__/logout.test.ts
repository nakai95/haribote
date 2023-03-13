import { jest } from "@jest/globals";
import { AxiosResponse } from "axios";

import { logout } from "../logout";

import { AuthApi } from "@/drivers/api";

describe("logout", () => {
  let spy: jest.SpiedFunction<typeof AuthApi.prototype.logoutDelete>;

  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      spy = jest.spyOn(AuthApi.prototype, "logoutDelete").mockResolvedValue({
        status: 200,
      } as AxiosResponse);
    });

    test(`ログアウトAPIにリクエストが送信される`, async () => {
      const r = await logout();
      expect(spy).toHaveBeenCalled();
      expect(r).toBe(true);
    });
  });
});
