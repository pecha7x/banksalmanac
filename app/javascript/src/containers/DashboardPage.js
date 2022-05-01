import React from 'react';
import {green300, redA200, greenA700} from 'material-ui/styles/colors';

import Assessment from 'material-ui/svg-icons/action/assessment';
import AccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';

import InfoBox from '../components/dashboard/InfoBox';
import Withdraws from '../components/dashboard/Withdraws';
import MonthlyProfit from '../components/dashboard/MonthlyProfit';
import BankUsage from '../components/dashboard/BankUsage';
import RecentlyOperations from '../components/dashboard/RecentlyOperations';
import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={AccountBalance}
                   color={green300}
                   title="Balance($)"
                   value="$15000"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={AccountBalanceWallet}
                   color={green300}
                   title="Balance(₽)"
                   value="₽4231002"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={greenA700}
                   title="Upcoming Profit"
                   value="+$2100"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={redA200}
                   title="Upcoming Outlay"
                   value="-₽460"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <Withdraws data={Data.dashBoardPage.withdraws}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlyProfit data={Data.dashBoardPage.monthlyProfit}/>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyOperations data={Data.dashBoardPage.recentOperations}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <BankUsage data={Data.dashBoardPage.bankUsage}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
