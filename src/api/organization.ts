import instance from './instance';
import { OrganizationResponse } from './types';

/**
 * @description
 * OrganizationList
 * @param query string is used in search.
 * @returns OrganizationList
 */
export const getOrganizationList = async (query?: string) => {
  try {
    const response = await instance.get<OrganizationResponse[]>(
      `/api/organizations${query ? `?q=${query}` : ''}`
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getOrganizationList.');
  }
};

/**
 * @description
 * Organization deatil 
 * @param id Organization id
 * @returns Organization
 */
export const getOrganization = async (id: number) => {
  try {
    const response = await instance.get<OrganizationResponse>(
      `/api/organizations/${id}`
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getOrganization.');
  }
};
