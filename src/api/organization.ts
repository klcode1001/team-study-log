import instance from './instance';
import type { OrganizationResponse } from './types';

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

export const createOrganization = async (name: string) => {
  try {
    const response = await instance.post<OrganizationResponse>(
      '/api/organizations',
      {
        name,
      }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at createOrganization.');
  }
};

export const joinOrganization = async (organizationId: number) => {
  try {
    const response = await instance.put<OrganizationResponse>(
      `/api/organizations/${organizationId}/users`
    );

    return response.data;
  } catch {
    throw new Error('error occurred at joinOrganization.');
  }
};

export const getJoinedOrganization = async () => {
  try {
    const response = await instance.get<OrganizationResponse[]>(
      '/api/organizations/joined'
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getJoinedOrganization.');
  }
};
