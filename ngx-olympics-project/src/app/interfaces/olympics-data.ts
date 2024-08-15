export interface OlympicsData {
  countries: Country[]
} 

export interface Country {
  countryName: string
  participants: number
  goldMedal: number
  silverMedal: number
  bronzeMedal: number
}
