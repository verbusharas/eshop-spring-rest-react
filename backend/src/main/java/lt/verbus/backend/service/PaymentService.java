package lt.verbus.backend.service;

import lt.verbus.backend.http.payment.PaymentSystemApi;
import lt.verbus.backend.http.payment.dto.PaymentSystemOverviewDTO;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private PaymentSystemApi paymentSystemApi;

    public PaymentService(PaymentSystemApi paymentSystemApi) {
        this.paymentSystemApi = paymentSystemApi;
    }

    public PaymentSystemOverviewDTO getPaymentOverview() {
        return paymentSystemApi.getOverview();
    }
}
