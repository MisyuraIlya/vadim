import axios from 'axios'
export const LabServices = {
  async getLabData(): Promise<ILab[]> {
    console.log('process.env.BACKEND_API',process.env.BACKEND_API)
    const response = await axios.get(
      `http://localhost:4001/lab`
    )
    return response.data
  },
}