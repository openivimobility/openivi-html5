#include "allowlocation_webpage.h"

AllowLocationWebPage::AllowLocationWebPage(QObject* parent) : QWebPage(parent) {
  connect(this,
          SIGNAL(featurePermissionRequested(QWebFrame*, QWebPage::Feature)),
          SLOT(permissionRequested(QWebFrame*, QWebPage::Feature)));
}

void AllowLocationWebPage::permissionRequested(QWebFrame* frame,
                                               QWebPage::Feature feature) {
  if (feature == Geolocation) {
    setFeaturePermission(frame, feature, PermissionGrantedByUser);
  }
}
