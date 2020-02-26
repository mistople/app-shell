import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IPageProps } from './Page.types';
import { getClassNames } from './Page.styles';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';
import { Home } from '../../pages/Home/Home';
import { Signals } from '../../pages/Signals/Signals';
import { Sources } from '../../pages/Sources/Sources';
import { Metrics } from '../../pages/Metrics/Metrics';
import { Segments } from '../../pages/Segments/Segments';
import { BasicSettings } from '../../pages/BasicSettings/BasicSettings';
import { Billing } from '../../pages/Billing/Billing';
import { ProjectMembers } from '../../pages/ProjectMembers/ProjectMembers';
import { getProjectBasedResourcePath, DocumentTypes } from '../../utils/helpers/routeHelper';

export const PageBase: React.FC<IPageProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme });

  const [isNavOverlay, setNavAsOverlay] = useState(false)

  function toggleNav() {
    setNavAsOverlay(!isNavOverlay)
  }

  const reportPath = getProjectBasedResourcePath(
    DocumentTypes.Report,
    ':projectId',
    ':resourceId'
  );

    const signalPath = getProjectBasedResourcePath(
    DocumentTypes.Signal,
    ':projectId',
    ':resourceId'
  );

  const sourcePath = getProjectBasedResourcePath(
    DocumentTypes.Source,
    ':projectId',
    ':resourceId'
  );

  const segmentPath = getProjectBasedResourcePath(
    DocumentTypes.Segment,
    ':projectId',
    ':resourceId'
  );

  const metricPath = getProjectBasedResourcePath(
    DocumentTypes.Metric,
    ':projectId',
    ':resourceId'
  );

  return (
    <div className={classNames.root}>
      <SuiteHeader className={classNames.header} toggleNav={toggleNav} />
      <Nav isNavOverlay={isNavOverlay} toggleNav={toggleNav} />
      <main className={classNames.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect strict from="/home/" to="/" exact />
          <Redirect strict from="/home" to="/" exact />

          <Redirect strict from={`${reportPath}/`} to={reportPath} />
          <Route exact path={reportPath} component={reportPage} />

          <Route exact path='/data/signals' component={Signals} />
          <Redirect strict from={`${signalPath}/`} to={signalPath} />
          <Route exact path={signalPath} component={signalPage} />

          <Route exact path='/data/sources' component={Sources} />
          <Redirect strict from={`${signalPath}/`} to={sourcePath} />
          <Route exact path={signalPath} component={sourcePage} />

          <Route exact path='/data/segments' component={Segments} />
          <Redirect strict from={`${segmentPath}/`} to={segmentPath} />
          <Route exact path={segmentPath} component={segmentPage} />

          <Route exact path='/data/metrics' component={Metrics} />
          <Redirect strict from={`${metricPath}/`} to={metricPath} />
          <Route exact path={metricPath} component={metricPage} />

          <Route exact path='/settings/basics' component={BasicSettings} />
          <Route exact path='/settings/billing' component={Billing} />
          <Route exact path='/settings/members' component={ProjectMembers} />
        </Switch>
      </main>
    </div>
  );
}