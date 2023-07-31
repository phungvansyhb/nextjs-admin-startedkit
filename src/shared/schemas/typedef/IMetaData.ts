interface IPInfo {
    ip: string;
    is_eu: boolean;
    city: string;
    region: string;
    region_code: string;
    region_type: string;
    country_name: string;
    country_code: string;
    continent_name: string;
    continent_code: string;
    latitude: number;
    longitude: number;
    postal?: any;
    calling_code: string;
    flag: string;
    emoji_flag: string;
    emoji_unicode: string;
    asn: Asn;
    languages: Language[];
    currency: Currency;
    time_zone: Timezone;
    threat: Threat;
    count: string;
  }
  
  interface Threat {
    is_tor: boolean;
    is_icloud_relay: boolean;
    is_proxy: boolean;
    is_datacenter: boolean;
    is_anonymous: boolean;
    is_known_attacker: boolean;
    is_known_abuser: boolean;
    is_threat: boolean;
    is_bogon: boolean;
    blocklists: any[];
  }
  
  interface Timezone {
    name: string;
    abbr: string;
    offset: string;
    is_dst: boolean;
    current_time: string;
  }
  
  interface Currency {
    name: string;
    code: string;
    symbol: string;
    native: string;
    plural: string;
  }
  
  interface Language {
    name: string;
    native: string;
    code: string;
  }
  
  interface Asn {
    asn: string;
    name: string;
    domain: string;
    route: string;
    type: string;
  }