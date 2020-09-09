import React from "react";

import { observer } from "mobx-react";

import { Alert } from "@blueprintjs/core";

import { alertState } from "../state/AlertState";

@observer
export class Alerter extends React.Component {
  public render() {
    const message = alertState.alertProps.message;
    const confirmText = alertState.alertProps.confirmText;
    const cancelText = alertState.alertProps.cancelText;
    return (
      <Alert
        className={"alert-container"}
        isOpen={alertState.alertOpen}
        confirmButtonText={confirmText}
        cancelButtonText={cancelText}
        onClose={() => this.onAlertClose()}
        onConfirm={() => this.onAlertConfirm()}
        onCancel={() => this.onAlertCancel()}
      >
        <div className={"alert-content"}>{message}</div>
      </Alert>
    );
  }

  private onAlertConfirm(): void {
    alertState.alertConfirmed();
  }

  private onAlertCancel(): void {
    alertState.alertCancelled();
  }

  private onAlertClose(): void {
    alertState.setAlertOpen(false);
  }
}
