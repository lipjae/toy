<style lang="scss">
  @import '../assets/css/stock.css';  
</style>

<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm1 d-flex>
        <v-select
          :items="stockType"
          label="시장 구분"
          outlined
          item-text="label"
          item-value="value"
          @change="getStockList"
        ></v-select>
      </v-flex>     
      <v-flex xs12 sm3 d-flex>
        <v-autocomplete
          :items="stocks"
          label="상장 회사"
          outlined
          no-data-text="시장을 선택해 주세요."
					item-text="cp_name"
          item-value="cp_code"
					@change="stockChange"
        ></v-autocomplete>
      </v-flex>
    </v-layout>

    <v-card
      class="mx-auto stock-card"
      max-width="344"
      v-model="stockDetail"
    >
      <v-card-text v-if="stockDetail.cp_name != undefined">
        <div class="cp_name">{{stockDetail.cp_name }}</div>
        <p class="">
          {{'업종 : ' + stockDetail.cp_type}}
        </p>
        <p class="">
          {{'주요제품 : ' + stockDetail.cp_product}}
        </p>
        <p class="">{{'상장일 : ' + stockDetail.cp_open}}</p>
        <!-- <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div> -->
      </v-card-text>
      <v-card-actions v-if="stockDetail.cp_name != undefined">
        <v-btn
          text
          color="deep-purple accent-4"
          @click="stockFinance(stockDetail.cp_code)"
        >
          재무재표 보기
        </v-btn>
      </v-card-actions>
      <div class="cp_name" v-else>회사를 선택해주세요.</div>
    </v-card>
    
    <v-data-table
    :items="finance"
    :headers="headers"
    :items-per-page="5"
    class="elevation-1"
    ></v-data-table>

  </v-container>
</template>

<script>

export default {
  created () {
    
  },
  data () {
    return {
      stockType : [
        {
          label : '코스피',
          value : 'stockMkt'
        },
        {
          label : '코스닥',
          value : 'kosdaqMkt'
        },
        {
          label : '코넥스',
          value : 'konexMkt'
        }
      ],
      stocks: [],
      stockDetail : '',
      finance : [],
      headers : [
          {
            text: '날짜',
            align: 'left',
            // sortable: false,
            value: 'fi_date',
          },
          { text: '매출액', value: 'sales' },
          { text: '영업이익', value: 'operating_profit' },
          { text: '영업이익(발표기준)', value: 'operating_profit_presentation' },
          { text: '세전계속사업이익', value: 'ordinary_profit' },
          { text: '당기순이익', value: 'net_profit' },
          { text: '당기순이익(지배)', value: 'net_profit_controll' },
          { text: '당기순이익(비지배)', value: 'net_profit_non_controll' },
          { text: '자산총계', value: 'total_assets' },
          { text: '부채총계', value: 'total_debt' },
          { text: '자본총계', value: 'total_capital' },
          { text: '자본총계(지배)', value: 'total_capital_controll'},
          { text: '자본총계(비지배)', value: 'total_capital_non_controll'},
          { text: '자본금', value: 'capital'},
          { text: '영업활동현금흐름', value: 'operating_cash_flows'},
          { text: '투자활동현금흐름', value: 'investment_activity_cash_flow'},
          { text: '재무활동현금흐름', value: 'financial_activity_cash_flow'},
          { text: 'CAPEX', value: 'capex'},
          { text: 'FCF', value: 'fcf'},
          { text: '이자발생부채', value: 'interest_accrual_liability'},
          { text: '영업이익률', value: 'operating_profit_ratio'},
          { text: '순이익률', value: 'net_profit_rate'},
          { text: 'ROE(%)	', value: 'roe'},
          { text: 'ROA(%)', value: 'roa'},
          { text: '부채비율', value: 'debt_ratio'},
          { text: '자본유보율', value: 'capital_reserve_ratio'},
          { text: 'EPS(원)', value: 'eps'},
          { text: 'PER(배)', value: 'per'},
          { text: 'BPS(원)', value: 'bps'},
          { text: 'PBR(배)', value: 'pbr'},
          { text: '현금DPS(원)', value: 'cash_dps'},
          { text: '현금배당수익률', value: 'cash_dividend_yield'},
          { text: '현금배당성향(%)', value: 'cash_dividend_propensity'},
          { text: '발행주식수(보통주)', value: 'total_issued_stock'}



      ]
    }
	},
	methods : {
    getStockList (stockType){
      this.$http.get(`/api/stocks?type=${stockType}`).then((res) => {
        this.stocks = res.data
      })
    },
		stockChange (cp_code){
      console.log(cp_code);
      var vueComp = this;
      
      this.$http.get(`/api/stocks/${cp_code}`).then(function(res){
        console.log(res);
        vueComp.stockDetail = res.data[0];
        console.log(vueComp.stockDetail);
      });
    },
    stockFinance (cp_code){
      var vueComp = this;
      this.$http.get(`/api/stocks//${cp_code}/finance`).then(function(res){
        console.log(res);
        vueComp.finance = res.data;
      });
    }
	}	
}

</script>





