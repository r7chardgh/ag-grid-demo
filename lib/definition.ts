export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        country: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            country: string;
        };
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    role: string;
}


//HKMA Daily Monetary Stat

export interface HKMAMonetaryData {
    end_of_date: string; // ISO format yyyy-mm-dd, e.g., 1997-01-01
    cu_weakside: number; // USD/HKD spot settlement, convertibility undertaking sell price
    cu_strongside: number; // USD/HKD spot settlement, convertibility undertaking buy price
    disc_win_base_rate: number; // Annual interest rate, discount window base rate
    hibor_overnight: number; // Annual interest rate, overnight HKD interbank borrowing rate
    hibor_fixing_1m: number; // Annual interest rate, HKAB 1-month HKD interbank fixing rate
    twi: number; // Trade-weighted index
    opening_balance: number; // Million HKD, opening aggregate balance
    closing_balance: number; // Million HKD, closing aggregate balance
    market_activities: string; // Million HKD, reason for change - market activities
    interest_payment: string; // Million HKD, reason for change - interest paid or new issuance of EFBN
    discount_window_reversal: string; // Million HKD, reason for change - discount window reversal
    discount_window_activities: string; // Million HKD, reason for change - daily discount window activities
    Intraday_movements_of_aggregate_balance_at_0930: number; // Million HKD, intraday movement of aggregate balance at 09:30
    Intraday_movements_of_aggregate_balance_at_1000: number; // Million HKD, intraday movement of aggregate balance at 10:00
    Intraday_movements_of_aggregate_balance_at_1100: number; // Million HKD, intraday movement of aggregate balance at 11:00
    Intraday_movements_of_aggregate_balance_at_1200: number; // Million HKD, intraday movement of aggregate balance at 12:00
    Intraday_movements_of_aggregate_balance_at_1500: number; // Million HKD, intraday movement of aggregate balance at 15:00
    Intraday_movements_of_aggregate_balance_at_1600: number; // Million HKD, intraday movement of aggregate balance at 16:00
    forex_trans_t1: string; // Million HKD, forecast reason - forex transactions, 1 day later
    other_market_activities_t1: string; // Million HKD, forecast reason - other market operations, 1 day later
    reversal_of_discount_window_t1: string; // Million HKD, forecast reason - discount window reversal, 1 day later
    interest_payment_issuance_efbn_t1: string; // Million HKD, forecast reason - EFBN interest or issuance, 1 day later
    forecast_aggregate_bal_t1: number; // Million HKD, forecast aggregate balance after discount window reversal, 1 day later
    forex_trans_t2: string; // Million HKD, forecast reason - forex transactions, 2 days later
    other_market_activities_t2: string; // Million HKD, forecast reason - other market operations, 2 days later
    reversal_of_discount_window_t2: string; // Million HKD, forecast reason - discount window reversal, 2 days later
    interest_payment_issuance_efbn_t2: string; // Million HKD, forecast reason - EFBN interest or issuance, 2 days later
    forecast_aggregate_bal_t2: number; // Million HKD, forecast aggregate balance after discount window reversal, 2 days later
    forex_trans_t3: string; // Million HKD, forecast reason - forex transactions, 3 days later
    other_market_activities_t3: string; // Million HKD, forecast reason - other market operations, 3 days later
    reversal_of_discount_window_t3: string; // Million HKD, forecast reason - discount window reversal, 3 days later
    interest_payment_issuance_efbn_t3: string; // Million HKD, forecast reason - EFBN interest or issuance, 3 days later
    forecast_aggregate_bal_t3: number; // Million HKD, forecast aggregate balance after discount window reversal, 3 days later
    forex_trans_t4: string; // Million HKD, forecast reason - forex transactions, 4 days later
    other_market_activities_t4: string; // Million HKD, forecast reason - other market operations, 4 days later
    reversal_of_discount_window_t4: string; // Million HKD, forecast reason - discount window reversal, 4 days later
    interest_payment_issuance_efbn_t4: string; // Million HKD, forecast reason - EFBN interest or issuance, 4 days later
    forecast_aggregate_bal_t4: number; // Million HKD, forecast aggregate balance after discount window reversal, 4 days later
    forex_trans_u: string; // Million HKD, forecast reason - forex transactions, beyond
    other_market_activities_u: string; // Million HKD, forecast reason - other market operations, beyond
    reversal_of_discount_window_u: string; // Million HKD, forecast reason - discount window reversal, beyond
    interest_payment_issuance_efbn_u: string; // Million HKD, forecast reason - EFBN interest or issuance, beyond
    forecast_aggregate_bal_u: number; // Million HKD, forecast aggregate balance after discount window reversal, beyond
}