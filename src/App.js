import styles from "./App.module.css";
import RedirectButton from "./components/RedirectButton";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.adminwrap}>
      <h1 className={styles.htitle}>모니터링 페이지</h1>
      <Table striped bordered hover className={styles.tablecustom}>
        <thead>
          <tr>
            <th>#</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">ArgoCD</td>
            <td>
              <RedirectButton
                url="http://argo-cd.woobuntu.shop"
                btnName="argocd"
              />
            </td>
          </tr>
          <tr>
            <td class="align-middle">Prometheus</td>
            <td>
              <RedirectButton
                url="http://prometheus.woobuntu.shop"
                btnName="prometheus"
              />
            </td>
          </tr>
          <tr>
            <td class="align-middle">Grafana</td>
            <td>
              <RedirectButton
                url="http://grafana.woobuntu.shop"
                btnName="grafana"
              />
            </td>
          </tr>
          <tr>
            <td class="align-middle"> Thanos</td>
            <td>
              <RedirectButton
                url="http://thanos.woobuntu.shop"
                btnName="thanos"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
