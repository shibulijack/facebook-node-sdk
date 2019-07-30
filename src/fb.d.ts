interface FBOptions {
    accessToken: string;
    appId: string;
    appSecret: string;
    version?: string;
    proxy?: string;
    timeout?: number;
    scope?: string;
    redirectUri?: string;
    Promise?: Promise<any>;
}

interface FBAPIInterface {
    path: string;
    method?: string;
    params?: object;
    callback?: Function;
}

interface FBKeyOrOptions {
    key: string;
    options: FBOptions;
}

interface SignedRequestResponse {
    oauthToken: string;
    userId: string;
    userCountry: string;
}

interface UsageInterface {
    callCount: number;
    totalTime: number;
    totalCPUTime: number;
}

export class Facebook {
    constructor(options?: FBOptions);

    api(arguments: FBAPIInterface): Promise<any>;

    extend(options: FBOptions): Facebook;

    getAccessToken(): string;

    getAppUsage(): UsageInterface;

    getPageUsage(): UsageInterface;

    getLoginUrl(options: FBOptions): string;

    napi(arguments: FBAPIInterface): void;

    options(keyOrOptions: keyof FBKeyOrOptions): any;

    parseSignedRequest(signedRequest: string, appSecret: string): SignedRequestResponse;

    setAccessToken(accessToken: string): void;

    withAccessToken(accessToken: string): Facebook;
}

export const version: string;

export function FacebookApiException(res: Response): Error;

export const FB: Facebook;
