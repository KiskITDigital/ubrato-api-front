import { AxiosResponse } from "axios";
import { api } from "../axiosConfig";
import { BaseResponse, BaseTableResponse } from "../types/base";
import {
  CreateTenderRequest,
  CreateTenderResponse,
  GetTenderRequest,
  GetTenderResponse,
  GetTendersRequest,
  GetTendersResponse,
  UpdateTenderRequest,
  UpdateTenderResponse,
  SendCommentRequest,
  GetCommentsRequest,
  GetCommentsResponse,
  RespondRequest,
  GetQAResponse,
  GetQARequest,
  SendQARequest,
  GetRespondsResponse,
  RespondsRequest,
  AdditionsRequest,
  GetAdditionsResponse,
} from "../types/tenders";

export const apiTenders = {
  getTenders: async function (
    props: GetTendersRequest,
  ): Promise<AxiosResponse<BaseTableResponse<GetTendersResponse>>> {
    return api.get("/tenders", { params: props.params });
  },

  createTender: async function (
    props: CreateTenderRequest,
  ): Promise<AxiosResponse<BaseResponse<CreateTenderResponse>>> {
    return api.post("/tenders", props.body);
  },

  getTender: async function (
    props: GetTenderRequest,
  ): Promise<AxiosResponse<BaseResponse<GetTenderResponse>>> {
    return api.get(`/tenders/${props.query.tenderID}`);
  },

  updateTender: async function (
    props: UpdateTenderRequest,
  ): Promise<AxiosResponse<BaseResponse<UpdateTenderResponse>>> {
    return api.put(`/tenders/${props.query.tenderID}`, props.body);
  },

  sendComment: async function (
    props: SendCommentRequest,
  ): Promise<AxiosResponse> {
    return api.post(`/tenders/${props.query.tenderID}/comments`, props.body);
  },

  getComments: async function (
    props: GetCommentsRequest,
  ): Promise<AxiosResponse<BaseResponse<GetCommentsResponse>>> {
    return api.get(`/tenders/${props.query.tenderID}/comments`, props.body);
  },

  sendRespond: async function (props: RespondRequest): Promise<AxiosResponse> {
    return api.post(`/tenders/${props.query.tenderID}/respond`, props.body);
  },

  getResponds: async function (
    props: RespondsRequest,
  ): Promise<AxiosResponse<BaseTableResponse<GetRespondsResponse>>> {
    return api.get(`/tenders/${props.query.tenderID}/respond`, props.body);
  },

  sendAdditions: async function (
    props: AdditionsRequest,
  ): Promise<AxiosResponse> {
    return api.post(`/tenders/${props.query.tenderID}/additions`, props.body);
  },

  getAdditions: async function (
    props: AdditionsRequest,
  ): Promise<AxiosResponse<BaseResponse<GetAdditionsResponse>>> {
    return api.get(`/tenders/${props.query.tenderID}/additions`, props.body);
  },

  postQA: async function (props: SendQARequest): Promise<AxiosResponse> {
    return api.post(`/tenders/${props.query.tenderID}/question-answer`);
  },

  getQA: async function (
    props: GetQARequest,
  ): Promise<AxiosResponse<BaseResponse<GetQAResponse>>> {
    return api.get(`/tenders/${props.query.tenderID}/question-answer`);
  },
};
