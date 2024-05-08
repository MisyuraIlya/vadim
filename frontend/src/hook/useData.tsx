import { LabServices } from '@/services/lab.service'
import useSWR from 'swr'

const fetchData = async (): Promise<ILab[]> => {
  return await LabServices.getLabData()
}

const useData = () => {
  const { data, error, isLoading, mutate } = useSWR<ILab[]>(
    `/api/lab`,
    () =>
      fetchData(),
    {
      refreshInterval: 1000 
    }
  )
 
  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useData